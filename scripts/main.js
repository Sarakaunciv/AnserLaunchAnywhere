
function setLaunchAnywhere()
{
	let serp = Planets.serpulo;
	let modGenerator = extend(SerpuloPlanetGenerator, {
		findLaunchCandidate: function(destination, selected) {
			if (selected != null)
			{
				return selected;
			}
			return this.super$findLaunchCandidate(destination, selected);
		}
	});
	serp.generator = modGenerator;
}

function setForceAllowErekirLaunchSchematics()
{
	let forceAllowErekirLaunchSchematics = Core.settings.getBool("forceAllowErekirLaunchSchematics", false);
	if (forceAllowErekirLaunchSchematics)
	{
		Planets.erekir.allowLaunchSchematics = true;
	}
}

function setForceAllowErekirLaunchResource()
{
	let forceAllowErekirLaunchResource = Core.settings.getBool("forceAllowErekirLaunchResource", false);
	if (forceAllowErekirLaunchResource)
	{
		Planets.erekir.allowLaunchLoadout = true;
	}
}

function setForceAllowNonCoreDeposit()
{
	let forceAllowNonCoreDeposit = Core.settings.getBool("forceAllowNonCoreDeposit", false);
	if (forceAllowNonCoreDeposit)
	{
		const gameStateRules = Vars.state.rules;
		gameStateRules.onlyDepositCore = false;
	}
}

Events.on(ClientLoadEvent, () => {
	const UISetGame = Vars.ui.settings.game;
	
	UISetGame.checkPref("forceAllowNonCoreDeposit", false, (value) => {
		setForceAllowNonCoreDeposit();
	});
	
	UISetGame.checkPref("forceAllowErekirLaunchSchematics", false, (value) => {});
	
	UISetGame.checkPref("forceAllowErekirLaunchResource", false, (value) => {});
	
	setLaunchAnywhere();
	setForceAllowErekirLaunchSchematics();
	setForceAllowErekirLaunchResource()
	
	setForceAllowNonCoreDeposit();
});
