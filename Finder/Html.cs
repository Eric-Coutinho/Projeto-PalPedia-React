using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;

public class Html
{
    public static HttpClient HttpClient = new HttpClient();
    public HtmlDocument doc { get; private set; } = new HtmlDocument();

    public static async Task<Html> FromUrl(string url)
    {
        var html = new Html();
        await html.LoadUrl(url);
        return html;
    }

    public static Html FromHtml(string html)
    {
        var obj = new Html();
        obj.LoadHtml(html);
        return obj;
    }

    public async Task LoadUrl(string url)
    {
        string html = await HttpClient.GetStringAsync(url);
        LoadHtml(html);
    }

    public void LoadHtml(string html)
        => doc.LoadHtml(html);

    public static implicit operator HtmlNode(Html html)
        => html.doc.DocumentNode;
}