using System.Collections.Generic;
using HtmlAgilityPack;

public class Drops
{
    public List<(Item item, int MinQuant, int? MaxQuant, int Percent)> BattleDrops { get; set; } = new();
    public List<Item> FarmDrops { get; set; } = new();

    private void SetTabs(HtmlNodeCollection tabs)
    {
        foreach (var tab in tabs)
        {
            var tbs = tab.SelectNodes("td");
            if (tbs[1].InnerText == "Farm Drop")
            {
                var item = ItemBuffer.Current.Get(tbs[0].InnerText.Trim());

                var img = tbs[0].SelectNode("img");
                item.Image = img.GetAttributeValue("src", "");

                FarmDrops.Add(item);
            } else {
                var item = ItemBuffer.Current.Get(tbs[0].InnerText.Trim());

                var img = tbs[0].SelectNode("img");
                item.Image = img.GetAttributeValue("src", "");

                var Qt = tbs[1].InnerText.Replace("Qt.", "").Trim().Split("-");

                var percent = int.Parse(tbs[2].InnerText.Replace("%", "").Trim());

                BattleDrops.Add((item, int.Parse(Qt[0]), Qt.Length > 1 ? int.Parse(Qt[1]) : null, percent));
            }
        }
    }

    public Drops(HtmlNodeCollection tabs)
        => SetTabs(tabs);
    public Drops(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Drops")
            .ParentNode
            .SelectNode("tbody")
            .SelectNodes("tr");
        SetTabs(tabs);
    }
}