using Godot;

public partial class QuitBtn : TextureButton
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

	public override void _Process(double delta)
	{
		if (Input.IsActionPressed("quitGame"))
		{
			DebugMenu.QuitGame(this);
		}
	}

	public void ButtonPressed()
	{
		GetNode<SoundFx>("/root/SoundFx").ButtonPressSound();
		DebugMenu.QuitGame(this);
	}
	#endregion
	#region Private methods
	#endregion
}
