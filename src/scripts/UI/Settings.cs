using Godot;

public static class Settings
{
	public static void UpdateSettingsUI(Node node)
	{
		
		string settings = string.Empty;
		settings += $"FPS: {GetFPS()}\n";
		settings += $"VSync: {GetVsync()}\n";
		settings += $"Coordinates: ({((int)((CharacterBody2D)node).Position.X)}, {((int)((CharacterBody2D)node).Position.Y)})";
		((Label)node.GetNode<Camera2D>("Camera").FindChild("CanvasLayer").FindChild("DebugData")).Text = settings;
	}

	public static DisplayServer.VSyncMode GetVsync()
	{
		return DisplayServer.WindowGetVsyncMode(0);
	}

	public static void SetVsync(DisplayServer.VSyncMode mode)
	{
		DisplayServer.WindowSetVsyncMode(mode);
	}

	public static double GetFPS()
	{
		return Engine.GetFramesPerSecond();
	}

	public static void QuitGame(Node node)
	{
		node.GetTree().Quit();
	}
}
