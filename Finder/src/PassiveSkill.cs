using System;
using System.Collections.Generic;

public class PassiveSkill
{
    public string Name { get; set; }
    public List<(string skill, int percent)> skills = new();
    public Passive PassiveType { get; set; }
    public int PassiveLevel { get; set; }

    public static Passive GetPassive(string passive)
        => (Passive)Enum.Parse(typeof(Passive),
            char.ToUpper(passive[0]) + passive.Substring(1).ToLower(),
            true);
}

public class PassiveSkillBuffer
{
    private static PassiveSkillBuffer crr = new();
    public static PassiveSkillBuffer Current => crr;
    public static void Reset()
        => crr = new();

    private Dictionary<string, PassiveSkill> map = new();

    public PassiveSkill Get(string skillName)
    {
        if (!map.ContainsKey(skillName))
            map.Add(skillName, new PassiveSkill() { Name = skillName });

        return map[skillName];
    }
}

public enum Passive
{
    Minus,
    Plus
}