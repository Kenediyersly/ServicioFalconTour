import express, {Application} from 'express';
import morgan from 'morgan'

//Routes
import IndexRoutes from '../routes/index.routes';
import usuarioRoutes from '../routes/usuario.routes';
import rankingRoutes from '../routes/ranquing.routes';
import valoracionRoutes from '../routes/valoracion.routes';
import servicioRoutes from '../routes/servicio.routes';


export class App {
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/use' ,usuarioRoutes);
        this.app.use('/ser' ,servicioRoutes);
        this.app.use('/ran' ,rankingRoutes);
        this.app.use('/val' ,valoracionRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Server on port: ', this.app.get('port'))
    }
}