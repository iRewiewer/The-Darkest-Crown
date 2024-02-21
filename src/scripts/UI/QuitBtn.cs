using Godot;

public partial class QuitBtn : Button
{
	public override void _Ready()
	{
		this.Pressed += ButtonPressed;
	}

	public override void _Process(double delta)
	{
		if (Input.IsActionPressed("quitGame"))
		{
			QuitGame(this);
		}
	}

	public void ButtonPressed()
	{
		QuitGame(this);
	}

	public static void QuitGame(Node node)
	{
		node.GetTree().Quit();
	}
}
