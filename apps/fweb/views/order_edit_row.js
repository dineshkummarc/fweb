// ==========================================================================
// Project:   Fweb.OrderEditRowView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Fweb */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Fweb.OrderEditRowView = SC.View.extend(
/** @scope Fweb.OrderEditRowView.prototype */ {
	
	// to add alternate rows : see http://martinottenwaelter.fr/2009/09/alternate-row-colors-in-sc-listviews/ and http://groups.google.com/group/sproutcore/browse_thread/thread/be2ae8c8ce37791b/e8408598b095592c?lnk=gst&q=alternate+row#e8408598b095592c
	render: function(context, firstTime) {
    if (this.get('contentIndex') % 2 === 0) {
      context.addClass('even');
    } else {
      context.addClass('odd');
    }
    return sc_super();
  },
	
	createChildViews: function(){
    var view, childViews = [];
		var row = this.get('content');
		// ROW of order
  	view = this.createChildView(
			SC.View.design({
		    layout: { left: 0, right: 0, top: 0, height: 24 },
				classNames: ['ord-edit-row rounded hl'],
				childViews: 'actions rowNum quant quantEvasa art desc1 dim datConPrev price note'.w(),
							
				actions: SC.View.design({
					layout: { right: 0, top: 2, height: 20, width: 80 },
					classNames: ['actions rounded'],
					childViews: 'move edit del'.w(),
					
					move: SC.LabelView.design({
						layout: { right: 50, top: 0, height: 20, width: 20 },
						classNames: ['icon-button'],
						value: '',
						icon: sc_static('resources/icons/move_icon.png'),
					}),
					edit: SC.LabelView.design({
						layout: { right: 26, top: 0, height: 20, width: 20 },
						classNames: ['icon-button'],
						value: '',
						icon: sc_static('resources/icons/pencil.png'),
					}),
					del: SC.LabelView.design({
						layout: { right: 2, top: 0, height: 20, width: 20 },
						classNames: ['icon-button'],
						value: '',
						icon: sc_static('resources/icons/delete.png'),
					})
				}),
				
				rowNum: SC.LabelView.design({
					layout: { left: 2, top: 2, height: 20, width: 20 },
					textAlign: 'center',
					classNames: ['row-num rounded blue'],
					value: row.get('rowNum'),
				}),
				quant: SC.LabelView.design({
					layout: { left: 30, top: 2, height: 20, width: 30 },
					textAlign: 'center',
					fontWeight: 'bold',
					valueBinding: '.parentView.parentView.content.quant',
				}),
				quantEvasa: SC.LabelView.design({
					layout: { left: 60, top: 2, height: 20, width: 50 },
					//valueBinding: '.parentView.parentView.content.quantEvasa',
					value: '(evasi '+row.get('quantEvasa')+')',
				}),
				art: SC.LabelView.design({
					layout: { left: 120, top: 2, height: 20, width: 100 },
					//valueBinding: '.parentView.parentView.content.art',
					value: 'art.'+row.get('art'),
				}),
				desc1: SC.LabelView.design({
					layout: { left: 230, top: 2, height: 20, width: 200 },
					valueBinding: '.parentView.parentView.content.desc1',
				}),
				dim: SC.LabelView.design({
					layout: { left: 440, top: 2, height: 20, width: 210 },
					value: 'misure: '+row.get('length')+'x'+row.get('width')+'x'+row.get('height')+' (LxPxA mm)',
				}),
				/*length: SC.LabelView.design({
					layout: { left: 470, top: 2, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.length',
				}),
				width: SC.LabelView.design({
					layout: { left: 530, top: 2, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.width',
				}),
				height: SC.LabelView.design({
					layout: { left: 590, top: 2, height: 20, width: 50 },
					valueBinding: '.parentView.parentView.content.height',
				}),*/
				datConPrev: SC.LabelView.design({
					layout: { left: 650, top: 2, height: 20, width: 150 },
					//valueBinding: SC.Binding.dateTime('%d/%m/%Y').from('.parentView.parentView.content.datConPrev'),
					value: 'consegna il '+row.get('datConPrev').toFormattedString('%d/%m/%Y'),
				}),
				price: SC.LabelView.design({
					layout: { left: 800, top: 2, height: 20, width: 150 },
					//valueBinding: '.parentView.parentView.content.price',
					value: row.get('price')+' Euro cadauno'
				}),
				note: SC.LabelView.design({
					layout: { left: 920, top: 2, height: 20, width: 600 },
					valueBinding: '.parentView.parentView.content.note',
				}),
				
				doubleClick: function(evt) {
					alert('double click on .ord-row');
				},
				
			})
		);
		childViews.push(view);
		this.set('childViews', childViews);
		}

});
