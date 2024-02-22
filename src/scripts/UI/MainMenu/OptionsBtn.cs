using Godot;

public partial class OptionsBtn : Button
{
	#region Public variables
	#endregion
	#region Private variables
	#endregion

	#region Public methods
	public override void _Ready()
	{
		this.Pressed += ButtonPressed;
	}
	public void ButtonPressed()
	{
		GetTree().ChangeSceneToFile(Const.optionsMenuPath);
	}
	#endregion
	#region Private methods
	#endregion
}
