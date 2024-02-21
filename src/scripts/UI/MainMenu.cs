using Godot;
using System;

public partial class MainMenu : Control
{
	#region Public variables
	[Export]
	public PackedScene debugMenu;
	#endregion

	#region Private variables
	private bool hasDebugMenuEnabled = false;
	private Control _debugMenu;
	#endregion

	public override void _Ready()
	{
		if(debugMenu == null)
		{
			GetTree().Quit();
		}
		this._debugMenu = debugMenu.Instantiate<Control>();
	}

	public override void _Process(double delta)
	{
		if(Input.IsActionJustPressed("debugMode"))
		{
			if (hasDebugMenuEnabled)
			{
				this.RemoveChild(this._debugMenu);
				hasDebugMenuEnabled = false;
			}
			else
			{
				this.AddChild(this._debugMenu);
				hasDebugMenuEnabled = true;
			}
		}
	}
}
