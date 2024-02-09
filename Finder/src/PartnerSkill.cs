using System;

public class PartnerSkill
{
    public string Name { get; set; }
    public Description Description { get; set; }
    public int? Level { get; set; }

    public PartnerSkill(Html html)
    {
        var skillNode = html
            .SelectNode("h3", text: "Partner Skill")
            .ParentNode;

        this.Name = skillNode.SelectNode("h3").SelectNode("span").InnerText;

        var divs = skillNode.SelectNodes("div");

        this.Description = new Description(skillNode);

        this.Level = divs.Count > 1 ?
            int.Parse(divs[1].InnerText.Replace("Unlocked at Technology Level ", "")) : null;
    }
}