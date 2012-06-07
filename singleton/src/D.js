function Singleton(instance) {
	if(!Singleton.getInstance) {
		Singleton.getInstance = function() {
			return instance;
		};
		instance = new Singleton();
	}
}(new Singleton);