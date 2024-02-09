using System.Collections.Generic;
using HtmlAgilityPack;

public class WorkSkills
{
    public List<(Work Work, int Level)> Skills = new();

    private void SetTabs(HtmlNodeCollection tabs)
    {
        foreach (var tab in tabs)
        {
            var name = tab.SelectNode("div").InnerText;
            var level = int.Parse(tab.SelectNode("small").InnerText);

            Skills.Add((name.GetWork(), level));
        }
    }

    public WorkSkills(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Work Skills")
            .ParentNode
            .SelectNode("div", "class", "flex-col")
            .SelectNodes("div");

        SetTabs(tabs);
    }
}