import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getTodo(id?: string) {
    if (id) {
      return (async () => {
        let data: Array<[]>;
        try {
          data = await fetch(`http://localhost:5005/products/${id}`).then(
            (res) => res.json(),
          );
        } catch (error) {
          return { message: 'Error - prod not found' };
        }
        return {
          message: 'Data ok. Product found by ID',
          data: data,
        };
      })();
    } else {
      return (async () => {
        const data = await fetch(`http://localhost:5005/products/`).then(
          (res) => res.json(),
        );
        return {
          message: 'Data ok. All the products from DB',
          data: data,
        };
      })();
    }
  }
}
