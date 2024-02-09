using HtmlAgilityPack;

public static class StaticNode
{
    public static HtmlNodeCollection SelectNodes(this HtmlNode node, string tag, string param = null, string paramValue = "", string text = null)
        => node.SelectNodes($".//{tag}" +
                            (param is null ? "" :  $"[@{param}='{paramValue}']") + 
                            (text is null ? "" : $"[text()='{text}']"));
    public static HtmlNodeCollection SelectNodes(this Html html, string tag, string param = null, string paramValue = "", string text = null)
        => SelectNodes((HtmlNode)html, tag, param, paramValue, text);

    public static HtmlNode SelectNode(this HtmlNode node, string tag, string param = null, string paramValue = "", string text = null)
        => node.SelectSingleNode($".//{tag}" +
                                (param is null ? "" :  $"[contains(@{param}, '{paramValue}')]") + 
                                (text is null ? "" : $"[contains(text(), '{text}')]"));
    public static HtmlNode SelectNode(this Html html, string tag, string param = null, string paramValue = "", string text = null)
        => SelectNode((HtmlNode)html, tag, param, paramValue, text);
}