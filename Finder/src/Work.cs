using System;

public enum Work
{
    Mining,
    Planting,
    Transporting,
    Watering,
    Cooling,
    Farming,
    Gathering,
    GeneratingElectricity,
    Handiwork,
    Kindling,
    Lumbering,
    MedicineProduction,
}

public static class Works
{
    public static Work GetWork(this string work)
        => (Work)Enum.Parse(typeof(Work), work, true);
}