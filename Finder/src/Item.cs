using System.Collections.Generic;
using System.Linq;

public class Item
{
    public string Name { get; set; }
    public string Image { get; set; }
    public Description Description { get; set; }
}

public class ItemBuffer
{
    private static ItemBuffer crr = new();
    public static ItemBuffer Current => crr;
    public static void Reset()
        => crr = new();

    private List<Item> map = new();

    public List<Item> Get()
        => map;
    public Item Get(string name)
    {
        if (map.Contains(name))
            return map.Find(p => p.Name == name);

        var item = new Item();
        item.Name = name;
        item.Description = Description.Empty;
        map.Add(item);
        return item;
    }
}

public static class StaticItem
{
    public static bool Contains(this List<Item> map, string name)
        => map.Any(i => i.Name == name);
}