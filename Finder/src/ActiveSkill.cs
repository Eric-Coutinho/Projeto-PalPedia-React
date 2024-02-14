using System;
using System.Collections.Generic;

public class ActiveSkill
{
    public string Name { get; set; }
    public Element Element { get; set; }
    public Active? Type { get; set; }
    public Description Description { get; set; }
    public int Power { get; set; }
    public (int Min, int Max) Range { get; set; }
    public int Colldown { get; set; }
    public string Special { get; set; }
    public float Rating { get; set; }
}

public class ActiveSkillsBuffer
{
    private static ActiveSkillsBuffer crr = new();
    public static ActiveSkillsBuffer Current => crr;
    public static void Reset()
        => crr = new();

    private Dictionary<string, ActiveSkill> map = new();

    public ActiveSkill Get(string skillName)
    {
        if (!map.ContainsKey(skillName))
            map.Add(skillName, new ActiveSkill() { Name = skillName });

        return map[skillName];
    }
}

public enum Active
{
    Melee,
    Shot
}

public static class Actives
{
    public static Active? GetActives(this string sctive)
    {
        string formattedString = char.ToUpper(sctive[0]) + sctive.Substring(1).ToLower();

        if (Enum.TryParse(formattedString, true, out Active active))
        {
            return active;
        }
        else
        {
            return null;
        }
    }
}