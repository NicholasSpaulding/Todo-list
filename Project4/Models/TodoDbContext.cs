using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Models
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.LogTo(Console.WriteLine).EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Todo>().HasData(
                new Todo
                {
                    ID = 1,
                    Name = "Laundry",
                    DueDate = DateTime.UtcNow,
                    State = true,
                });
            modelBuilder.Entity<TodoType>().HasData(
                new TodoType
                {
                    ID = 1,
                    Name = "cleaning",
                    TodoID = 1
                });
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<TodoType> TodoTypes { get; set; }
    }
}
