

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event9_Act1(runtime, localVars)
	{
		runtime.goToLayout("Fase2");
	},

	async FolhaDeEventosFase2_Event9_Act1(runtime, localVars)
	{
		runtime.goToLayout("TelaVitoria");
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
