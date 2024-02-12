using System.Collections.Generic;
using System.Text.Json;

public static class PalJson
{
    public static string ToJson(this Specie specie)
    {
        var data = new Dictionary<string, object>();

        data["Id"] = specie.Id;
        data["Pals"] = specie.Pals.ToDictionary();

        return JsonSerializer.Serialize(data);
    }

    public static Dictionary<string, object> ToDictionary(this Specie specie)
    {
        var data = new Dictionary<string, object>();

        data["Id"] = specie.Id;
        data["Pals"] = specie.Pals.ToDictionary();

        return data;
    }

    public static List<Dictionary<string, object>> ToDictionary(this List<(Pal Pal, Form Form, char Letter)> pals)
    {
        var list = new List<Dictionary<string, object>>();

        foreach (var pal in pals)
        {
            var data = new Dictionary<string, object>();
            data["Pal"] = pal.Pal.ToDictionary();
            data["Form"] = pal.Form.ToString();
            data["Letter"] = pal.Letter.ToString();
            list.Add(data);
        }

        return list;
    }

    public static Dictionary<string, object> ToDictionary(this Pal pal)
    {
        var data = new Dictionary<string, object>();

        data["Name"] = pal.Name;
        data["Element"] = pal.Element.ToString();
        data["Thumbnail"] = pal.ThumbnailImage;
        data["Image"] = pal.Image;
        data["Description"] = pal.Description.ToDictionary();
        data["Stats"] = pal.Stats.ToDictionary();
        data["Movement"] = pal.Movement.ToDictionary();
        data["Drops"] = pal.Drops.ToDictionary();
        data["PartnerSkill"] = pal.PartnerSkill.ToDictionary();
        data["WorkSkill"] = pal.WorkSkills.ToDictionary();
        data["PassiveSkills"] = pal.PassiveSkills.ToDictionary();
        data["ActiveSkills"] = pal.ActiveSkills.ToDictionary();

        return data;
    }

    public static Dictionary<string, object> ToDictionary(this Description description)
    {
        var data = new Dictionary<string, object>();

        data["Text"] = description.Text;
        if (description.Badge is not null)
            data["Badge"] = ToDictionary((description.Badge, description.BadgeColor));

        return data;
    }

    public static Dictionary<string, object> ToDictionary((string Badge, Color? BadgeColor) badge)
    {
        var data = new Dictionary<string, object>();

        data["Title"] = badge.Badge;
        if (badge.BadgeColor is not null)
        {
            data["Color"] = badge.BadgeColor.ToString();
            data["HexColor"] = badge.BadgeColor.Value.GetHexColor();
        }

        return data;
    }

    public static Dictionary<string, object> ToDictionary(this Drops drops)
    {
        var data = new Dictionary<string, object>();

        var battledrops = new List<Dictionary<string, object>>();
        foreach (var drop in drops.BattleDrops)
        {
            var dropdata = new Dictionary<string, object>();
            dropdata["Item"] = drop.item.ToDictionary();
            dropdata["Minimum"] = drop.MinQuant;
            if (drop.MaxQuant is not null)
                dropdata["Maximum"] = drop.MaxQuant;
            battledrops.Add(dropdata);
        }
        data["BattleDrops"] = battledrops;

        var farmdrops = new List<Dictionary<string, object>>();
        foreach (var drop in drops.FarmDrops)
            farmdrops.Add(drop.ToDictionary());
        data["FarmDrops"] = farmdrops;

        return data;
    }

    public static Dictionary<string, object> ToDictionary(this Item item)
    {
        var data = new Dictionary<string, object>();

        data["Name"] = item.Name;
        data["Image"] = item.Image;
        data["Description"] = item.Description.ToDictionary();

        return data;
    }

    public static Dictionary<string, object> ToDictionary(this PartnerSkill partnerSkill)
    {
        var data = new Dictionary<string, object>();

        data["Name"] = partnerSkill.Name;
        data["Description"] = partnerSkill.Description.ToDictionary();
        if (partnerSkill.Level is not null)
            data["Level"] = partnerSkill.Level.Value;

        return data;
    }

    public static List<Dictionary<string, object>> ToDictionary(this WorkSkills workSkills)
    {
        var list = new List<Dictionary<string, object>>();

        foreach (var skill in workSkills.Skills)
        {
            var data = new Dictionary<string, object>();

            data["Work"] = skill.Work.ToString();
            data["Level"] = skill.Level;

            list.Add(data);
        }

        return list;
    }

    public static List<Dictionary<string, object>> ToDictionary(this PassiveSkills passiveSkills)
    {
        var list = new List<Dictionary<string, object>>();

        foreach (var skill in passiveSkills.Skills)
            list.Add(skill.ToDictionary());

        return list;
    }

    public static Dictionary<string, object> ToDictionary(this PassiveSkill passiveSkill)
    {
        var data = new Dictionary<string, object>();

        data["Name"] = passiveSkill.Name;

        var list = new List<Dictionary<string, object>>();
        foreach (var skill in passiveSkill.Skills)
        {
            var skilldata = new Dictionary<string, object>();
            skilldata["Title"] = skill.skill;
            skilldata["Percent"] = skill.percent;
            list.Add(skilldata);
        }
        if (list.Count > 0)
            data["Skills"] = list;

        var passive = new Dictionary<string, object>();
        passive["Type"] = passiveSkill.PassiveType.ToString();
        passive["Level"] = passiveSkill.PassiveLevel;
        data["Passive"] = passive;

        return data;
    }

    public static List<Dictionary<string, object>> ToDictionary(this ActiveSkills activeSkills)
    {
        var list = new List<Dictionary<string, object>>();

        foreach (var skill in activeSkills.Skills)
        {
            var skilldata = new Dictionary<string, object>();
            skilldata["Skill"] = skill.Skill.ToDictionary();
            skilldata["Level"] = skill.Level;
            list.Add(skilldata);
        }

        return list;
    }

    public static Dictionary<string, object> ToDictionary(this ActiveSkill activeSkill)
    {
        var data = new Dictionary<string, object>();

        data["Name"] = activeSkill.Name;
        data["Element"] = activeSkill.Element.ToString();
        data["Type"] = activeSkill.Type;
        data["Description"] = activeSkill.Description.ToDictionary();
        data["Power"] = activeSkill.Power;

        var range = new Dictionary<string, object>();
        range["Minimum"] = activeSkill.Range.Min;
        range["Maximum"] = activeSkill.Range.Max;
        data["Range"] = range;

        data["Colldown"] = activeSkill.Colldown;
        if (activeSkill.Special is not null && activeSkill.Special != "")
            data["Special"] = activeSkill.Special;
        data["Rating"] = activeSkill.Rating;

        return data;
    }

    public static Dictionary<string, object> ToDictionary(this object obj)
    {
        var data = new Dictionary<string, object>();

        var props = obj.GetType().GetProperties();
        foreach (var prop in props)
            data[prop.Name] = prop.GetValue(obj);

        return data;
    }
}