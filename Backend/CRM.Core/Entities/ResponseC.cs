using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRM.Core.Entities
{
    public class ResponseC<T>
    {
        public int Code { get; set; } = 200;
        public string Message { get; set; } = "";

        public T Data { get; set; }

        public ResponseC( T data ) { 
            this.Data = data;
        }
        
    }
}
