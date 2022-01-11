using Microsoft.EntityFrameworkCore;
using Project4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Services
{
    public class TodoService : ITodoService
    {
        private TodoDbContext context;
    
        public TodoService(TodoDbContext context)
        {
            this.context = context;
        }


        public async Task<Todo> Create(Todo todo)
        {
            this.context.Todos.Add(todo);
            await this.context.SaveChangesAsync();
            return todo;
        }

        public async Task<Todo> GetById(int id)
        {
            var todo = this.context.Todos.Include(p => p.Types).FirstOrDefault<Todo>(p => p.ID == id);
            return todo;
        }

        public async Task<bool> Delete(int id)
        {
            this.context.Todos.Remove(await GetById(id));
            await this.context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Todo>> Get()
        {
            return await this.context.Todos.Include(p => p.Types).ToListAsync<Todo>();
        }

        public async Task<Todo> Update(Todo todo)
        {
            var todoToUpdate = await GetById(todo.ID);
            todoToUpdate.Name = todo.Name;
            todoToUpdate.Types.Clear();
            foreach(TodoType type in todo.Types)
            {
                todoToUpdate.Types.Add(type);
            }
            await this.context.SaveChangesAsync();
            return todoToUpdate;
        }
    }
}
