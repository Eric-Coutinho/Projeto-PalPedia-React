using System;
using System.ComponentModel;

public enum Color
{
    [Description("#1f1f1f")] Dark,
    [Description("#343a40")] Gray,
    [Description("#e03131")] Red,
    [Description("#c2255c")] Pink,
    [Description("#9c36b5")] Grape,
    [Description("#6741d9")] Violet,
    [Description("#3b5bdb")] Indigo,
    [Description("#1971c2")] Blue,
    [Description("#0c8599")] Cyan,
    [Description("#099268")] Teal,
    [Description("#2f9e44")] Green,
    [Description("#66a80f")] Lime,
    [Description("#f08c00")] Yellow,
    [Description("#e8590c")] Orange
}

public static class Colors
{
    public static Color GetColor(this string color)
        => (Color)Enum.Parse(typeof(Color),
            char.ToUpper(color[0]) + color.Substring(1).ToLower(),
            true);

    public static string GetHexColor(this Color color)
    {
        var field = color.GetType().GetField(color.ToString());
        var attributes = field.GetCustomAttributes(typeof(DescriptionAttribute), false);

        return attributes.Length > 0 ? ((DescriptionAttribute)attributes[0]).Description : color.ToString();
    }

    public static string GetHexColor(this string color)
        => color.GetColor().GetHexColor();
}