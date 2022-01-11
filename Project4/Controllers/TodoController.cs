using Microsoft.AspNetCore.Mvc;
using Project4.Models;
using Project4.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project4.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {

        private ITodoService todoService;

        public TodoController(ITodoService todoService)
        {
            this.todoService = todoService;
        }
        // GET: api/<TodoController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> Get()
        {
            return Ok(await this.todoService.Get());
        }

        // GET api/<TodoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> Get(int id)
        {
            return Ok(await this.todoService.GetById(id));
        }

        // POST api/<TodoController>
        [HttpPost]
        public async Task<ActionResult<Todo>> Post([FromBody] Todo todo)
        {
            return Ok(await this.todoService.Create(todo));
        }

        // PUT api/<TodoController>
        [HttpPut()]
        public async Task<ActionResult<Todo>> Put([FromBody] Todo todo)
        {
            return Ok(await this.todoService.Update(todo));
        }

        // DELETE api/<TodoController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return Ok(await this.todoService.Delete(id));
        }
        
    }
}
