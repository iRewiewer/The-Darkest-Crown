using Godot;

public partial class QuitBtn : Button
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

	public override void _Process(double delta)
	{
		if (Input.IsActionPressed("quitGame"))
		{
			DebugMenu.QuitGame(this);
		}
	}

	public void ButtonPressed()
	{
		DebugMenu.QuitGame(this);
	}
	#endregion
	#region Private methods
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