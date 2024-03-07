using Godot;

public partial class PlayGameBtn : TextureButton
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
	#endregion
	#region Private methods
	private void ButtonPressed()
	{
		GetNode<SoundFx>("/root/SoundFx").ButtonPressSound();
		GetTree().ChangeSceneToFile(Const.queenDemoPath);
	}
	#endregion
}
