import { Command } from './command.interface';

class CommandFromJson implements Command
{
    get(key: string):string {
        throw new Error('Method not implemented.');
    }
}