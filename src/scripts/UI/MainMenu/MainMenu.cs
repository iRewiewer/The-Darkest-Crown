using Godot;

public partial class MainMenu : Control
{
	#region Public variables
	[Export]
	public PackedScene debugMenu { get; set; }
	#endregion

	#region Private variables
	private Control _debugMenu;
	#endregion

	#region Public Methods
	public override void _Ready()
	{
		if(debugMenu == null)
		{
			GD.Print("Main Menu doesn't have a Debug Menu Scene set");
		}
		this._debugMenu = debugMenu.Instantiate<Control>();
		// load Const.Configuration from config.json file 
	}

	public override void _Process(double delta)
	{
		if(Input.IsActionJustPressed("debugMode"))
		{
			if (Const.hasDebugMenuEnabled)
			{
				this.RemoveChild(this._debugMenu);
				Const.hasDebugMenuEnabled = false;
			}
			else
			{
				this.AddChild(this._debugMenu);
				Const.hasDebugMenuEnabled = true;
			}
		}

		if (Input.IsActionPressed("quitGame"))
		{
			DebugMenu.QuitGame(this);
		}
	}
	#endregion

	#region Private Methods
	#endregion
}
