/**
 * Created by vincebloise on 7/20/16.
 */
System.config({
    baseURL: "/",
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            "defaultExtension": "ts",
            "main": "main.ts"
        }
    }
});