using System.Collections.Generic;
using System.Text.RegularExpressions;
using HtmlAgilityPack;

public class PassiveSkills
{
    public List<PassiveSkill> Skills { get; set; } = new();

    private void SetTabs(HtmlNodeCollection tabs)
    {
        if (tabs is null) return;

        foreach (var tab in tabs)
        {
            var divs = tab.SelectNodes("div");

            var name = divs[0].SelectNode("div", "class", "capitalize").InnerText.Trim();
            var skill = PassiveSkillBuffer.Current.Get(name);

            var img = divs[0].SelectNode("img").GetAttributeValue("src", "").Split('/');
            var imgUrl = img[img.Length - 1];

            var imgString = Regex.Match(imgUrl, @"passive_(\w+).png").Groups[1].Value.Split("_");

            skill.PassiveLevel = int.Parse(imgString[1]);
            skill.PassiveType = PassiveSkill.GetPassive(imgString[0]);

            if (!(divs.Count > 1)) return;
            var skills = divs[1].SelectNodes("div");
            foreach (var div in skills)
            {
                var skillDivs = div.SelectNodes("div");

                var skillName = skillDivs[0].InnerText.Trim();
                var skillPercent = skillDivs[1]
                    .InnerText.Trim()
                    .Replace("+", "")
                    .Replace("-", "")
                    .Replace("%", "");

                skill.Skills.Add((
                    char.ToUpper(skillName[0]) + skillName.Substring(1).ToLower(),
                    int.Parse(skillPercent)
                ));
            }
        }
    }

    public PassiveSkills(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Passive Skills")?
            .ParentNode
            .SelectNode("div")
            .SelectNodes("div");

        SetTabs(tabs);
    }
}