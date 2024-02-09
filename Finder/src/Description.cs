using System;
using System.Text.RegularExpressions;
using System.Web;
using HtmlAgilityPack;

public class Description
{
    public static readonly Description Empty = new Description();
    public bool isEmpty { get; private set; } = false;
    public string Badge { get; set; }
    public Color? BadgeColor { get; set; }
    public string Text { get; set; }

    public Description(HtmlNode node)
    {
        var div = node.SelectNode("div");
        if (div is not null && div.InnerText != "")
        {
            this.Badge = div.InnerText;

            var style = div.GetAttributeValue("style", "");
            if (style == "") style = div.SelectNode("div").GetAttributeValue("style", "");
            var color = Regex.Match(style, @"--mantine-color-(\w+)-filled").Groups[1].Value;
            this.BadgeColor = color.GetColor();
        }

        // var nodesplit = node.InnerHtml.Split("<br>");
        // this.Text = HttpUtility.HtmlDecode(nodesplit[nodesplit.Length - 1]);

        this.Text = "";
        foreach (var child in node.ChildNodes)
            if (child.NodeType == HtmlNodeType.Text)
                this.Text += child.InnerText;
        this.Text = HttpUtility.HtmlDecode(this.Text);
    }
    public Description(Html html) : this(html.SelectNode("section", "class", "content-section full-flex")) { }
    private Description() { this.isEmpty = true; }
}