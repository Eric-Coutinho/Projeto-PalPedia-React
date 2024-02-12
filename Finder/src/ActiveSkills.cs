using System;
using System.Collections.Generic;
using HtmlAgilityPack;

public class ActiveSkills
{
    public List<(ActiveSkill Skill, int Level)> Skills { get; set; } = new();

    private void SetTabs(HtmlNodeCollection tabs)
    {
        if (tabs is null) return;

        foreach (var tab in tabs)
        {
            var divs = tab.SelectNodes("div");
            var name = divs[0].SelectNode("div", "class", "capitalize").InnerText.Trim();
            ActiveSkill skill = ActiveSkillsBuffer.Current.Get(name);
            skill.Name = name;

            var level = int.Parse(divs[0].SelectNode("small").InnerText.Replace("Lv.", "").Trim());

            skill.Element = divs[0].SelectNode("img").GetAttributeValue("alt", "").GetElement().Value;
            skill.Type = divs[0].SelectNode("span").InnerText.GetActives();

            var specifications = divs[1].SelectNodes("div");
            skill.Power = int.Parse(specifications[0].SelectNodes("div")[1].InnerText.Trim());
            var range = specifications[1].SelectNodes("div")[1].InnerText.Trim().Split("-");
            skill.Range = (int.Parse(range[0]), int.Parse(range[1]));
            skill.Colldown = int.Parse(specifications[2].SelectNodes("div")[1].InnerText.Trim());

            skill.Description = new Description(divs[2].SelectNode("small"));

            var lastdiv = divs[3].SelectNodes("div");
            skill.Special = lastdiv[0].InnerText.Trim();
            string rating = "";
            foreach (var child in lastdiv[1].ChildNodes)
                if (child.NodeType == HtmlNodeType.Text)
                    rating += child.InnerText;
            skill.Rating = float.Parse(rating);
            
            Skills.Add((skill, level));
        }
    }

    public ActiveSkills(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Active Skills")?
            .ParentNode
            .SelectNode("div")
            .SelectNodes("div");

        SetTabs(tabs);
    }
}