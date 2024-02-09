using System.Collections.Generic;

public class Specie
{
    public int Id { get; set; }
    public List<(Pal Pal, Form Form, char Letter)> Pals = new List<(Pal Pal, Form Form, char Letter)>();
}

public enum Form
{
    Default,
    Alpha,
}