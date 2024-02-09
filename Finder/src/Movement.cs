using System;
using HtmlAgilityPack;

public class Movement
{
    public int SlowWalk { get; set; }
    public int Run { get; set; }
    public int RideSprint { get; set; }
    public int Transport { get; set; }

    private void SetTabs(HtmlNodeCollection tabs)
    {
        foreach (var tab in tabs)
        {
            var tbs = tab.SelectNodes("td");
            var name = tbs?[0]?.InnerText.Trim();
            var value = tbs?[1]?.InnerText.Trim();

            switch (name)
            {
                case "Slow walk speed":
                    this.SlowWalk = int.Parse(value);
                    break;
                case "Run speed":
                    this.Run = int.Parse(value);
                    break;
                case "Ride sprint speed":
                    this.RideSprint = int.Parse(value);
                    break;
                case "Transport speed":
                    this.Transport = int.Parse(value);
                    break;
            }
        }
    }
    
    public Movement(HtmlNodeCollection tabs)
        => SetTabs(tabs);

    public Movement(Html html)
    {
        var tabs = html
            .SelectNode("h3", text: "Movement")
            .ParentNode
            .SelectNode("tbody")
            .SelectNodes("tr");
        SetTabs(tabs);
    }
}