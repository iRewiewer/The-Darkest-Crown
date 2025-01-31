using Godot;

public partial class PlayMenu : Node
{
    Public variables

    public MenuButton difficulty;
#endregion
    Private variables
	#endregion

	 Public methods

    public override void _Ready()
    {
        difficulty = (MenuButton)FindChild("Difficulty");
    }
#endregion
    Private methods
	#endregion
}
