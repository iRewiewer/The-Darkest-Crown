using Godot;

public partial class BackBtn : TextureButton
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
		GetNode<SoundFx>("/root/SoundFx").ButtonPressSound();
		GetTree().ChangeSceneToFile(Const.mainMenuPath);
	}
	#endregion
	#region Private methods
	#endregion
}
