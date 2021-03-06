var LOG_LEVEL_INFO = 1,
    LOG_LEVEL_DEBUG = 2,
    LOG_LEVEL_WARN = 3,
    LOG_LEVEL_ERROR = 4,
    LOG_LEVEL = LOG_LEVEL_ERROR;

var logger = {

    setLogLevel : function(logLevel){
        switch(logLevel.toUpperCase()){
            case 'INFO':
                LOG_LEVEL = LOG_LEVEL_INFO;
                return
            case 'DEBUG':
                LOG_LEVEL = LOG_LEVEL_DEBUG;
                return
            case 'WARN':
                LOG_LEVEL = LOG_LEVEL_WARN;
                return
        }       
    },

    info : function(){
        if(LOG_LEVEL <= LOG_LEVEL_INFO){
            console.info(...arguments);
        }
    },

    debug : function(){
        if(LOG_LEVEL <= LOG_LEVEL_DEBUG){
            console.debug(...arguments);
        }
    },

    warn : function(){
        if(LOG_LEVEL <= LOG_LEVEL_WARN){
            console.warn(...arguments);
        }
    },

    error : function(){
        if(LOG_LEVEL <= LOG_LEVEL_ERROR){
            console.error(...arguments);
        }
    }

};
export default logger;