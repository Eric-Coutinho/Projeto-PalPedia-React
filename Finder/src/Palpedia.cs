using System.Collections.Generic;
using System.Linq;

public class Palpedia
{
    private static Palpedia crr = new();
    public static Palpedia Current => crr;
    public static void Reset()
        => crr = new();

    private Dictionary<int, Specie> map = new();

    public List<Specie> Get()
        => map.Values.ToList();
    public Specie Get(int id)
    {
        if (map.ContainsKey(id))
            return map[id];
        
        var specie = new Specie();
        specie.Id = id;
        map.Add(id, specie);
        return specie;
    }

    private List<(Pal Pal, Form Form, char Letter)> alphas = new();
    public void Add(Pal pal)
    {
        var form = pal.Name.Contains("Alpha") ? Form.Alpha : Form.Default;
        int id;
        bool success = int.TryParse(pal.Id, out id);

        char letter = !success && pal.Id.Length > 0 ? pal.Id[^1] : 'A';

        var specie = Current.Get(id);
        if (form == Form.Alpha)
            alphas.Add((pal, form, letter));
        else
            specie.Pals.Add((pal, form, letter));

        foreach (var alpha in alphas)
        {
            if (alpha.Pal.Name.Replace("Alpha", "").Trim() == pal.Name && alpha.Pal != pal)
            {
                alpha.Pal.Id = pal.Id;
                specie.Pals.Add((alpha.Pal, alpha.Form, alpha.Letter));
            }
        }
    }
}