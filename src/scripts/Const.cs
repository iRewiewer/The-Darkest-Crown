using System.Collections.Generic;

public static class Const
{
	// TODO
	// HACK
	// FIXME
	public static bool hasDebugMenuEnabled = false;
	public static Dictionary<string, string> Configuration = new Dictionary<string, string>();
	#region Paths
	#region Scenes
	public static string mainMenuPath = "res://scenes/UI/MainMenu/MainMenu.tscn";
	public static string playMenuPath = "res://scenes/UI/MainMenu/PlayMenu.tscn";
	public static string optionsMenuPath = "res://scenes/UI/MainMenu/OptionsMenu.tscn";
	public static string queenDemoPath = "res://scenes/maps/QueenMap_Demo.tscn";
	#endregion
	#endregion
}
