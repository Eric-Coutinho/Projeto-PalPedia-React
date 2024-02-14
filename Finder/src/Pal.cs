using System.Collections.Generic;
using System.Net.Http;

public class Pal
{
    private Html _html;
    private string _id;
    public string Id 
    { 
        get {
            if (_id is null && _html is not null) {
                var nodeId = _html.SelectNode("h3", "class", "dark-text");
                _id = nodeId.InnerHtml.Replace("#<!-- -->", "");
            }
            return _id;
        } 
        set => _id = value; 
    }
    private string _name;
    public string Name
    { 
        get {
            if (_name is null && _html is not null) {
                var node = _html.SelectNode("div", "class", "flex-row col-gap full-width align-center justify-center");
                var nodeName = node.SelectNode("h1");
                _name = nodeName.InnerHtml;
            }
            return _name;
        }
        set => _name = value;
    }
    private Element? _element;
    public Element? Element
    {
        get {
            if (_element is null && _html is not null) {
                var node = _html.SelectNode("div", "class", "flex-row col-gap align-center");
                var nodeImage = node.SelectNode("img");
                _element = nodeImage.GetAttributeValue("alt", "").GetElement();
            }
            return _element;
        }
        set => _element = value;
    }
    private string _thumbnailImage;
    public string ThumbnailImage {
        get {
            if (_thumbnailImage is null && _html is not null) {
                var nodeImage = _html.SelectNode("img", "width", "160");
                _thumbnailImage = nodeImage.GetAttributeValue("src", "");
            }
            return _thumbnailImage;
        }
        set => _thumbnailImage = value;
    }
    private string _image;
    public string Image {
        get {
            if (_image is null) {
                Html html;
                try { html = Html.FromUrl("https://palworld.fandom.com/wiki/" + this.Name.Replace("Alpha ", "").Replace("(Flower)", "").Trim()).Result; }
                catch (HttpRequestException) { _image = ""; return _image; }

                var node = html.SelectNode("a", "class", "image image-thumbnail");
                var nodeImage = node.SelectNode("img");
                string image = nodeImage.GetAttributeValue("src", "");
                _image = image.Replace("/revision/latest?cb=20240202133852", "");
            }
            return _image;
        }
        set => _image = value;
    }
    public Description Description { get; set; }
    public Stats Stats { get; set; }
    public Movement Movement { get; set; }
    public Drops Drops { get; set; }
    public PartnerSkill PartnerSkill { get; set; }
    public WorkSkills WorkSkills { get; set; }
    public PassiveSkills PassiveSkills { get; set; }
    public ActiveSkills ActiveSkills { get; set; }

    public static Pal FromHtml(Html html)
    {
        var pal = new Pal();
        pal.setHtml(html);
        return pal;
    }

    public void setHtml(Html html)
    {
        this._html = html;
        this._id = null;
        this._name = null;
        this._element = null;
        this._thumbnailImage = null;
        this._image = null;

        this.Description = new Description(html);
        this.Stats = new Stats(html);
        this.Movement = new Movement(html);
        this.Drops = new Drops(html);
        this.PartnerSkill = new PartnerSkill(html);
        this.WorkSkills = new WorkSkills(html);
        this.PassiveSkills = new PassiveSkills(html);
        this.ActiveSkills = new ActiveSkills(html);
    }
}