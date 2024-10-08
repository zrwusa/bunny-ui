## Design Principles:

- Respect HTML and React standards: In simple terms, you can replace any standard HTML components such as button, div, span, etc., with their corresponding React components while retaining all the original HTML attributes and enhancing them with unified styling. All you need to do is change div to Div, span to Span.
- All components are based on the concept of composition: You will still combine components just like you would in HTML. Years of frontend development have shown that UI is better suited for composition rather than OOP. (React's shift toward functional components is due to this realization; after years of experimentation, React recognized that UI is more suited to a compositional approach.)
- Categorize base components: This helps better organize the code structure and behavior of components and improve reusability. Our components are categorized into:
interactive (Radio, Link, Checkbox, Radio, Switch)
container (Card, Table, Modal, Box, Form)
Typography (P, Span, Label, prompt information)
layout
- Unified component states: Almost all components can present states like loading, disabled, error, and warning.

<table>
    <tr>
        <td>Component type</td>
        <td>Example</td>
        <td>Status management</td>
        <td>Style</td>
        <td>Style extension</td>
        <td>Subcomponent style extension</td>
        <td>Receive Props</td>
        <td>Distribute Props</td>
        <td>Side effects</td>
        <td>Distribution Context/Redux</td>
        <td>Receive Context/Redux</td>
    </tr>
    <tr>
        <td>Basics</td>
        <td>Label, Typography, Input, Thead, Checkbox, Select, Slider, Switch, Text Field, Badge, Chip, Divider, Icon, ListItem, Tooltip, Alert</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Composites</td>
        <td>Card, Accordion, Pagination, Tabs, Stepper, List, TBody, Image List, Thead Group, Radio Group, Rating, Transfer List, ToggleButtonGroup</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Structures</td>
        <td>Row, Col, DataGrid, Container</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Enhancers</td>
        <td>ComponentLogger, PermissionController</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <td>Cross-Cutting Concerns</td>
        <td>ThemeProvider, ErrorCollector</td>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
        <td>No</td>
        <td>Yes</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Page</td>
        <td>Dashboard</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>Yes</td>
    </tr>
</table>