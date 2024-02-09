using System;
using HtmlAgilityPack;

public class Stats
{
    public int Hp { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }
    public int Support { get; set; }
    public int Craft { get; set; }
    public int Stomach { get; set; }
    public int Food { get; set; }
    public int Rarity { get; set; }
    public int MaleProbability { get; set; }
    public int CombiRank { get; set; }
    public string Size { get; set; }

    private void SetTabs(HtmlNodeCollection tabs)
    {
        foreach (var tab in tabs)
        {
            var tbs = tab.SelectNodes("td");
            var name = tbs?[0]?.InnerText.Trim();
            var value = tbs?[1]?.InnerText.Trim();

            switch (name)
            {
                case "Hp":
                    this.Hp = int.Parse(value);
                    break;
                case "Base attack":
                    this.Attack = int.Parse(value);
                    break;
                case "Defense":
                    this.Defense = int.Parse(value);
                    break;
                case "Support":
                    this.Support = int.Parse(value);
                    break;
                case "Craft speed":
                    this.Craft = int.Parse(value);
                    break;
                case "Max full stomach":
                    this.Stomach = int.Parse(value);
                    break;
                case "Food amount":
                    this.Food = int.Parse(value);
                    break;
                case "Rarity":
                    this.Rarity = int.Parse(value);
                    break;
                case "Male probability":
                    this.MaleProbability = int.Parse(value);
                    break;
                case "Combi rank":
                    this.CombiRank = int.Parse(value);
                    break;
                case "Size":
                    this.Size = value;
                    break;
            }
        }
    }

    public Stats(HtmlNodeCollection tabs)
        => SetTabs(tabs);
    public Stats(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Stats")
            .ParentNode
            .SelectNode("tbody")
            .SelectNodes("tr");
        SetTabs(tabs);
    }
}