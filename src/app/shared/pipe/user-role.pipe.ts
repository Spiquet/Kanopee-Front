import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userRole',
})
export class UserRolePipe implements PipeTransform {
    transform(value: any): Record<string, any> {
        return Object.keys(value)
            .filter((e) => e)
            .map((val) => {
                return { name: val, description: value[val] };
            });
    }
}
