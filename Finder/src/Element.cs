using System;
using System.ComponentModel;

public enum Element
{
    Dark,
    Dragon,
    Electric,
    Fire,
    Grass,
    Ground,
    Ice,
    Normal,
    Water
}

public static class Elements
{
    public static Element? GetElement(this string element)
        => (Element)Enum.Parse(typeof(Element),
            char.ToUpper(element[0]) + element.Substring(1).ToLower(),
            true);
}