library('shiny')
library('shinyjs')
shinyApp(
  ui = fluidPage(
    useShinyjs(),
    div(id = "myapp",
        h2("shinyjs demo"),
        textInput("name", "Name", ""),
        div(id = "advanced",
            numericInput("age", "Age", 30),
            textInput("company", "Company", "")),
        a(id = "toggleAdvanced", "Show/hide advanced info"),
        p("Timestamp: ", span(date())),
        actionButton("submit", "Submit")
        )
  ),
  server = function(input, output){
    observe(
      shinyjs::hidden()
    )
  }
)
