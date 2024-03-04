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
		this.MouseEntered += OnHoverEnter;
		this.MouseExited += OnHoverExit;
	}
	#endregion
	#region Private methods
	private void ButtonPressed()
	{
		GetTree().ChangeSceneToFile(Const.optionsMenuPath);
	}
	private void OnHoverEnter()
	{
		this.Icon = Const.hoverTexture;
	}
	private void OnHoverExit()
	{
		this.Icon = Const.normalTexture;
	}
	#endregion
}


