using Godot;

public partial class PlayMenu : Node
{
	#region Public variables
	public MenuButton difficulty;
	#endregion
	#region Private variables
	#endregion

	#region Public methods
	public override void _Ready()
	{
		difficulty = (MenuButton)FindChild("Difficulty");
	}
	#endregion
	#region Private methods
	#endregion
}
