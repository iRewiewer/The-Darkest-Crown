using Godot;

public partial class MainMenuButton : Button
{
    public override void _Ready()
    {
        this.ButtonDown += ColorOnClick;
        this.ButtonUp += ResetColor;
        this.MouseEntered += ColorOnHover;
        this.MouseExited += ResetColor;
        this.Pressed += ButtonPressed;
    }
    private void ColorOnClick()
    {
        this.SelfModulate = new Color(0.8f, 0.8f, 0.8f, 1);
    }
    private void ColorOnHover()
    {
        if (this.Name == "StoryBtn" || this.Name == "CombatBtn")
        {
            this.SelfModulate = new Color(1.8f, 1.8f, 1.8f, 1);
            return;
        }

        this.SelfModulate = new Color(1, 1, 1.8f, 1);
    }
    private void ResetColor()
    {
        this.SelfModulate = new Color(1, 1, 1, 1);
    }

    private void ButtonPressed()
    {
        GetNode<SoundFx>("/root/SoundFx").ButtonPressSound();

        switch (this.Name)
        {
            case "QuitBtn":
                DebugMenu.QuitGame(this);
                return;
            case "StoryBtn":
                // TODO Reduce all enemy health and damage dealt by 20% (subject to change)
                break;
        }

        GetTree().ChangeSceneToFile(Const.scenePaths[this.Name]);
    }
}
