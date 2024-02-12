using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Text.Json;

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

    var percent = (float)i / all * 100;
    Console.Clear();
    Console.WriteLine($"Progresso: {percent:F2}%\n\n\n");
    Console.WriteLine($"Ultimo carregado: {pal.Name}");
}

var list = new List<Dictionary<string, object>>();
var species = Palpedia.Current.Get();
for (int i = 0; i < species.Count; i++)
{
    var specie = species[i].ToDictionary();
    if (specie.TryGetValue("Pals", out var palsValue) && palsValue is List<Dictionary<string, object>> palsList && palsList.Count > 0)
        list.Add(specie);

    var percent = (float)i / species.Count * 100;
    Console.Clear();
    Console.WriteLine($"Escrevendo json...");
    Console.WriteLine($"Progresso: {percent}%");
}

Console.Clear();
File.WriteAllText("palpedia.json", JsonSerializer.Serialize(list));
Console.WriteLine($"Json Finalizado");
