using Godot;

public partial class SoundFx : Node
{
	public void ButtonPressSound()
	{
		this.GetChild<AudioStreamPlayer2D>(0).Play();
	}
}
