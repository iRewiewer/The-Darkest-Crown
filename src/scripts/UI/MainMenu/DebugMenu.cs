using Godot;

public partial class DebugMenu : Control
{
	#region Public variables
	#endregion
	#region Private variables
	#endregion

	#region Public methods
	public override void _Ready()
	{
	}

	public override void _Process(double delta)
	{
		if (Const.hasDebugMenuEnabled)
		{
			UpdateSettingsUI(this);
		}
	}

	public static void UpdateSettingsUI(Node node)
	{
		string settings = "Debug Data\n";
		settings += $"VSync: {GetVsync()}\n";
		settings += $"FPS: {GetFPS()}\n";
		settings += $"Max FPS: {GetMaxFPS()}\n";
		settings += $"Architecture: {GetArchitecture()}\n";
		settings += $"Monitor Id: {GetMonitor()}\n";
		settings += $"Screen Size: {GetScreenSize()}\n";
		//settings += $"Coordinates:({((int)((CharacterBody2D)node).Position.X)}, {((int)((CharacterBody2D)node).Position.Y)})";
		node.GetNode<Label>("DebugData").Text = settings;
	}

	public static void QuitGame(Node node)
	{
		node.GetTree().Quit();
	}
	#endregion
	#region Private methods
	private static DisplayServer.VSyncMode GetVsync()
	{
		return DisplayServer.WindowGetVsyncMode(0);
	}

	private static void SetVsync(DisplayServer.VSyncMode mode)
	{
		DisplayServer.WindowSetVsyncMode(mode);
	}

	private static double GetFPS()
	{
		return Engine.GetFramesPerSecond();
	}

	private static string GetMaxFPS()
	{
		return Engine.MaxFps == 0 ? "No limit" : Engine.MaxFps.ToString();
	}

	private static string GetArchitecture()
	{
		return Engine.GetArchitectureName();
	}

	private static string GetMonitor()
	{
		return $"{DisplayServer.GetPrimaryScreen()} (out of {DisplayServer.GetScreenCount()})";
	}

	private static string GetScreenSize()
	{
		return $"Screen {DisplayServer.ScreenGetSize(DisplayServer.GetPrimaryScreen())}";
	}
	#endregion
}
