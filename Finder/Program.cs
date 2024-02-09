using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Newtonsoft.Json;

HttpClient.DefaultProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;

string html = File.ReadAllText(Directory.GetCurrentDirectory() + "/src/allPalsDivs.txt");

var palpediaNet = Html.FromHtml(html);
var palpediaNode = palpediaNet.SelectNode("div", "class", "flex-row justify-center");

var cardpals = palpediaNode.SelectNodes("a", "class", "card");
var links = new List<string>();

foreach (var card in cardpals)
{
    var href = card.GetAttributeValue("href", "");
    links.Add("https://www.palpedia.net/" + href);
}

int all = links.Count;
for (int i = 0; i < links.Count; i++)
{
    Html palhtml = await Html.FromUrl(links[i]);
    Pal pal = Pal.FromHtml(palhtml);
    Palpedia.Current.Add(pal);

    var percent = ((float)i / all) * 100;
    Console.Clear();
    Console.WriteLine($"Progresso: {percent:F2}%\n\n\n");
    Console.WriteLine($"Ultimo carregado: {pal.Name}");
}

Console.Clear();
Console.WriteLine($"Progresso: 100%\n\n\n");
Console.WriteLine($"Escrevendo json...");
string json = JsonConvert.SerializeObject(Palpedia.Current.Get());

File.WriteAllText("palpedia.json", json);
