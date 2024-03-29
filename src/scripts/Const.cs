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
	public static Dictionary<string, string> scenePaths = new Dictionary<string, string>()
	{
		{ "BackToMainMenuBtn", "res://scenes/UI/MainMenu/MainMenu.tscn" },
		{ "PlayBtn", "res://scenes/UI/MainMenu/PlayMenu.tscn" },
		{ "OptionsBtn", "res://scenes/UI/MainMenu/OptionsMenu.tscn" },
		{ "StoryBtn", "res://scenes/maps/QueenMap_Demo.tscn" },
		{ "CombatBtn", "res://scenes/maps/QueenMap_Demo.tscn" }
	};
	#endregion
	#endregion
}
